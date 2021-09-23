import { articles } from './json/articles';

const App = () => {
    return (
        <>
            <header className="header">
                <h1>Traveler<span className="text-primary">.</span></h1>
            </header>

            <main className="main">
                <section className="section">
                    <div className="text">
                        <h2>
                            One day you will be at the place you always wanted to be<span className="text-primary">.</span>
                        </h2>
                    </div>
                    <div className="image-large">
                        <span className="image" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1571028634586-ae87c1a42432?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80)"}} />
                        <span className="overlay" />
                    </div>
                </section>
                <section className="section">
                    <div className="image-small">
                        <span className="image" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1473864803180-ca1b3d93c9a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80)" }} />
                        <span className="overlay" />
                    </div>
                    {articles.map((article,i) => {
                        return (
                            <article key={i} className="card">
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