import { forwardRef } from 'react';

export const Answers = forwardRef((props, ref) => (
    <section className="answers" ref={ref}>
        <h1 className="answers_title title">
            Відповіді на запитання
        </h1>
    </section>
));