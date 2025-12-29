import React, { useEffect, useState } from 'react'

export default function Hero() {
    const beforeName = "Hi, I'm ";
    const name = 'Saurav Bhandari';
    const fullText = beforeName + name;

    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [caretVisible, setCaretVisible] = useState(true);

    useEffect(() => {
        let timer;
        const speed = isDeleting ? 50 : 120;

        if (!isDeleting && text === fullText) {
            timer = setTimeout(() => setIsDeleting(true), 1200);
        } else if (isDeleting && text === '') {
            setIsDeleting(false);
        } else {
            timer = setTimeout(() => {
                const next = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
                setText(next);
            }, speed);
        }

        return () => clearTimeout(timer);
    }, [text, isDeleting]);

    useEffect(() => {
        const t = setInterval(() => setCaretVisible(v => !v), 500);
        return () => clearInterval(t);
    }, []);

    const typedBefore = text.slice(0, beforeName.length);
    const typedName = text.slice(beforeName.length);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-24">
            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 px-6 items-center">
                <div className="flex justify-center">
                    <div className="w-64 h-64 rounded-full border-4 border-cyan-400 overflow-hidden shadow-lg">
                        <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12" className="w-full h-full object-cover" />
                    </div>
                </div>
                <div>
                    <h1 className="text-4xl font-bold">
                        <span>{typedBefore}</span>
                        <span className="text-cyan-400">{typedName}</span>
                        <span className="ml-1">{caretVisible ? '|' : ' '}</span>
                    </h1>
                    <p className="mt-4 text-gray-400">3D Artist | Animator | Game Designer</p>
                    <div className="mt-6 flex gap-4">
                        <a href="#projects" className="px-6 py-3 bg-cyan-400 text-black rounded-lg">View My Work</a>
                        <a href="#contact" className="px-6 py-3 border border-cyan-400 rounded-lg">Get In Touch</a>
                    </div>
                </div>
            </div>
        </section>
    )
}