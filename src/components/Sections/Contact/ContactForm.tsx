import {FC, memo, useCallback, useMemo, useState} from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: FC = memo(() => {
  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<{success?: boolean; message?: string} | null>(null);

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;

      const fieldData: Partial<FormData> = {[name]: value};

      setData({...data, ...fieldData});
    },
    [data],
  );

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setIsSubmitting(true);
      setSubmitStatus(null);
      
      try {
        // You can use a serverless function URL here (Netlify, Vercel, AWS Lambda, etc.)
        // Or use a service like FormSpree, Formik, etc.
        const response = await fetch('https://formspree.io/f/your-form-id', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            message: data.message,
            subject: 'Contact Form Submission from GitHub Page'
          }),
        });

        if (response.ok) {
          setSubmitStatus({
            success: true,
            message: 'Message sent successfully! I\'ll get back to you soon.',
          });
          setData(defaultData); // Reset form after successful submission
        } else {
          throw new Error('Failed to send message');
        }
      } catch (error) {
        console.error('Error sending message:', error);
        setSubmitStatus({
          success: false,
          message: 'Failed to send message. Please try again or contact me directly on LinkedIn.',
        });
      } finally {
        setIsSubmitting(false);
      }
    },
    [data, defaultData],
  );

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
      <input className={inputClasses} name="name" onChange={onChange} placeholder="Name" required type="text" value={data.name} />
      <input
        autoComplete="email"
        className={inputClasses}
        name="email"
        onChange={onChange}
        placeholder="Email"
        required
        type="email"
        value={data.email}
      />
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        onChange={onChange}
        placeholder="Message"
        required
        rows={6}
        value={data.message}
      />
      
      {submitStatus && (
        <div className={`text-sm ${submitStatus.success ? 'text-green-400' : 'text-red-400'}`}>
          {submitStatus.message}
        </div>
      )}
      
      <button
        aria-label="Submit contact form"
        className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800 disabled:opacity-50"
        disabled={isSubmitting}
        type="submit">
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
      
      <p className="text-xs text-neutral-400 mt-2">
        Alternatively, you can message me directly on <a className="text-orange-600 hover:underline" href="https://www.linkedin.com/in/wikus-kriek-8b1433147/" rel="noopener noreferrer" target="_blank">LinkedIn</a>.
      </p>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
