import { Head } from '@inertiajs/react';

function PageShell({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-black">
            <div className="mx-auto flex min-h-screen w-full max-w-[480px] flex-col bg-[#c59a6f] px-5 py-6">
                {children}
            </div>
        </div>
    );
}

function BrandHeader() {
    return (
        <header className="mb-6 text-center">
            <div className="mb-2 flex flex-col items-center gap-0.5">
                <span className="text-[26px] font-bold tracking-[0.2em]">
                    ابن الشام
                </span>
                <span className="text-[18px] font-semibold tracking-[0.45em]">
                    IBN ALSHAM
                </span>
            </div>
            <p className="text-[11px] uppercase tracking-[0.25em]">
                Inspired By History
            </p>
        </header>
    );
}

function MenuSection() {
    const items = ['Palmhills menu', 'Telal Menu', 'For Review'];

    return (
        <section className="mb-8">
            <div className="flex flex-col gap-3">
                {items.map((label) => (
                    <button
                        key={label}
                        className="rounded-full bg-[#e1b78b] px-4 py-2.5 text-sm font-medium text-[#262626] shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
                        type="button"
                    >
                        {label}
                    </button>
                ))}
            </div>
        </section>
    );
}

function ContactFormSection() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // TODO: hook this up to a backend endpoint or email service.
    };

    return (
        <section className="mb-8 text-center">
            <h2 className="mb-1 font-serif text-3xl">Contact Us</h2>
            <p className="mx-auto mb-4 max-w-xs text-xs leading-relaxed text-[#4a4a4a]">
                We consider all the drivers of change gives you the components you
                need to change to create a truly happens.
            </p>

            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 text-left text-xs text-[#333333]"
            >
                <label className="flex flex-col gap-1.5">
                    <span>Name</span>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full rounded-full border-0 bg-[#d7b18b] px-4 py-2.5 text-sm placeholder:text-[#674d39]/70 focus:outline-none focus:ring-2 focus:ring-[#303841]"
                    />
                </label>

                <label className="flex flex-col gap-1.5">
                    <span>Phone</span>
                    <input
                        type="tel"
                        placeholder="Enter your phone"
                        className="w-full rounded-full border-0 bg-[#d7b18b] px-4 py-2.5 text-sm placeholder:text-[#674d39]/70 focus:outline-none focus:ring-2 focus:ring-[#303841]"
                    />
                </label>

                <label className="flex flex-col gap-1.5">
                    <span>Message</span>
                    <textarea
                        rows={4}
                        placeholder="Write your message"
                        className="w-full resize-none rounded-2xl border-0 bg-[#d7b18b] px-4 py-3 text-sm placeholder:text-[#674d39]/70 focus:outline-none focus:ring-2 focus:ring-[#303841]"
                    />
                </label>

                <button
                    type="submit"
                    className="mt-1 w-full rounded-full bg-[#303841] px-4 py-3 text-sm font-medium text-[#f5f5f5] transition hover:-translate-y-0.5 hover:bg-[#1f252b] hover:shadow-lg"
                >
                    Send
                </button>
            </form>
        </section>
    );
}

function MapSection() {
    return (
        <section className="mb-6 text-center">
            <h2 className="mb-1 font-serif text-2xl">Find Us on map</h2>
            <p className="mx-auto mb-3 max-w-xs text-[11px] leading-relaxed text-[#4a4a4a]">
                We consider all the drivers of change gives you the components you
                need to change to create a truly happens.
            </p>

            <div className="overflow-hidden rounded-xl shadow-md">
                <div className="flex h-40 w-full items-center justify-center bg-[url('https://via.placeholder.com/480x160?text=Map')] bg-cover bg-center text-sm text-white shadow-inner">
                    Map preview
                </div>
            </div>
        </section>
    );
}

function FooterSection() {
    return (
        <footer className="mt-4 text-center">
            <p className="mb-2 text-xs">Continue With</p>
            <div className="flex justify-center gap-4 text-xl">
                <button
                    aria-label="Pinterest"
                    type="button"
                    className="transition hover:scale-110"
                >
                    P
                </button>
                <button
                    aria-label="WhatsApp"
                    type="button"
                    className="transition hover:scale-110"
                >
                    W
                </button>
                <button
                    aria-label="Facebook"
                    type="button"
                    className="transition hover:scale-110"
                >
                    f
                </button>
                <button
                    aria-label="Instagram"
                    type="button"
                    className="transition hover:scale-110"
                >
                    Ig
                </button>
            </div>
        </footer>
    );
}

export default function IbnAlsham() {
    return (
        <>
            <Head title="Ibn Alsham" />
            <PageShell>
                <BrandHeader />
                <MenuSection />
                <ContactFormSection />
                <MapSection />
                <FooterSection />
            </PageShell>
        </>
    );
}

