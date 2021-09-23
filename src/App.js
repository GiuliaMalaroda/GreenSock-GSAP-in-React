import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { articlesAnimation, h1Animation, h2Animation, imageAnimation } from './utils/animations';
import { addToRef } from './utils/helpers';
import { articles } from './json/articles';

const App = () => {
    const h1Ref = useRef(null);
    const h2Ref = useRef(null);
    const imageLargeRef = useRef(null);
    const imageSmallRef = useRef(null);
    const articlesRef = useRef(null);
    articlesRef.current = [];

    useLayoutEffect(() => {
        const h1 = h1Animation(h1Ref.current, .5);
        const h2 = h2Animation(h2Ref.current, 1);
        const imageLarge = imageAnimation(imageLargeRef, .5);
        const imageSmall = imageAnimation(imageSmallRef,  .25);
        const articles = articlesAnimation(articlesRef.current, 1, .5);

        const imagesTimeline = gsap.timeline();
        imagesTimeline
            .add(imageSmall)
            .add(imageLarge);

        const animationTimeline = gsap.timeline({ delay: 1 });
        animationTimeline
            .add(h1)
            .add(h2, "someLabel")
            .add(imagesTimeline, "someLabel -=.75")
            .add(articles, "<");
    }, []);

    return (
        <>
            <header className="header">
                <h1 ref={h1Ref}>Traveler<span className="text-primary">.</span></h1>
            </header>

            <main className="main">
                <section className="section">
                    <div className="text">
                        <h2 ref={h2Ref}>
                            One day you will be at the place you always wanted to be<span className="text-primary">.</span>
                        </h2>
                    </div>
                    <div 
                        ref={imageLargeRef}
                        className="image-large" >
                        <span className="image" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1571028634586-ae87c1a42432?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80)"}} />
                        <span className="overlay" />
                    </div>
                </section>
                <section className="section">
                    <div 
                        ref={imageSmallRef}
                        className="image-small" >
                        <span className="image" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1473864803180-ca1b3d93c9a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80)" }} />
                        <span className="overlay" />
                    </div>
                    {articles.map((article,i) => {
                        return (
                            <article key={i} className="card" ref={(el) => addToRef(el, articlesRef)}>
                                <div className="card__header">
                                    <div className="category">{article.category}</div>
                                    <h3>{article.title}</h3>
                                </div>
                                <div className="card__cta">
                                    Read
                                </div>
                                <a href={article.url}>Read article</a>
                            </article>
                        )
                    })}
                </section>
            </main>
        </>
    );
}

export default App;