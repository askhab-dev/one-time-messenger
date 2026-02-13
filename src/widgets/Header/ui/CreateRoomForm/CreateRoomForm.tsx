import { Clock, SquarePen, Users } from 'lucide-react';
import { useState } from 'react';
import { Controller, type SubmitHandler, useForm } from 'react-hook-form';

import { Input } from '@/shared/ui/Input';
import { Label } from '@/shared/ui/Label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/Select';

const lifeTimeAfterCreationOptions = [
  { value: 15, label: '15 минут' },
  { value: 60, label: '1 час' },
  { value: 240, label: '4 часа' },
  { value: 1440, label: '24 часа' },
];

type LifeTimeAfterCreationOption =
  (typeof lifeTimeAfterCreationOptions)[number]['value'];

interface FormData {
  /**
   * Room name
   */
  roomName: string;
  /**
   * Maximum partisipants.
   */
  maxPartisipants: number;
  /**
   * Life time after creation (minutes).
   */
  lifetimeAfterCreation: LifeTimeAfterCreationOption;
}

export const CreateRoomForm: React.FC = () => {
  const { register, handleSubmit, control } = useForm<FormData>({
    defaultValues: {
      lifetimeAfterCreation: lifeTimeAfterCreationOptions[1].value,
    },
  });
  const [maxPartisipants, setMaxPartisipants] = useState(2);

  const handleFormSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <form
      className='w-full flex flex-col space-y-4'
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div className='space-y-2'>
        <Label htmlFor='roomName' className='flex items-center gap-2'>
          <SquarePen className='h-4 w-4 text-muted-foreground' /> Room Name
        </Label>
        <Input
          type='text'
          id='roomName'
          className='h-8'
          {...register('roomName', { maxLength: 20 })}
        />
      </div>

      <div>
        <Label htmlFor='maxPartisipants' className='flex items-center gap-2'>
          <Users className='h-4 w-4 text-muted-foreground' /> Max Partisipants
        </Label>
        <div className='flex items-center gap-3'>
          <Input
            className='pl-1 pr-0'
            id='maxPartisipants'
            type='range'
            min={2}
            max={50}
            defaultValue={2}
            onInput={(e) => {
              // @ts-expect-error no value
              setMaxPartisipants(e.target.value);
            }}
            {...register('maxPartisipants', { setValueAs: Number })}
          />
          <div className='flex items-center justify-center w-18 h-8 rounded-md border bg-muted/50 font-semibold cursor-default'>
            {maxPartisipants}
          </div>
        </div>
      </div>

      <div className='space-y-2'>
        <Label
          htmlFor='lifetimeAfterCreation'
          className='flex items-center gap-2'
        >
          <Clock className='h-4 w-4 text-muted-foreground' /> Lifetime After
          Creation
        </Label>
        <Controller
          control={control}
          name='lifetimeAfterCreation'
          render={({ field }) => (
            <Select
              onValueChange={(value) => field.onChange(Number(value))}
              defaultValue={field.value?.toString()}
            >
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Выберите время жизни' />
              </SelectTrigger>
              <SelectContent>
                {lifeTimeAfterCreationOptions.map((option) => (
                  <SelectItem
                    key={option.value}
                    value={option.value.toString()}
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
      </div>
      <button type='submit' className='h-81'>
        Submit
      </button>
    </form>
  );
};
