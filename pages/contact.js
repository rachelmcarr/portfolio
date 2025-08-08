import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h1 className="mb-8 text-center text-4xl font-bold tracking-tight text-neutral-100">
          Contact
        </h1>
        <ContactForm />
      </div>
    </section>
  );
}
