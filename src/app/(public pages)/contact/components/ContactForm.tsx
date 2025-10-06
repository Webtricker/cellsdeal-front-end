import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactForm() {
  return (
    <div className='bg-accent/10 h-fit rounded-lg p-8 shadow-lg md:p-12'>
      <h2 className='capitalize'>Send us a message</h2>
      <form className='mt-8 space-y-6'>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
          <div>
            <Input id='name' placeholder='Name' type='text' className='h-12 bg-white text-base' />
          </div>
          <div>
            <Input
              id='email'
              placeholder='Email*'
              type='email'
              required
              className='h-12 bg-white text-base'
            />
          </div>
        </div>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
          <div>
            <Input id='phone' placeholder='Phone' type='tel' className='h-12 bg-white text-base' />
          </div>
          <div>
            <Input
              id='subject'
              placeholder='Subject*'
              type='text'
              required
              className='h-12 bg-white text-base'
            />
          </div>
        </div>
        <div>
          <Textarea
            id='message'
            placeholder='Your Message*'
            rows={6}
            required
            className='h-40 bg-white text-base'
          />
        </div>
        <Button
          type='submit'
          className='bg-primary hover:bg-primary/90 w-full py-3 text-lg text-white'
        >
          SEND MESSAGE
        </Button>
      </form>
    </div>
  );
}
