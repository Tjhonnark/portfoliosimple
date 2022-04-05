import Layout from "../components/Layout";

export default function Index(){
    return (
        <Layout>
            {/* Header Card */}
            <header className="row">
                <div className="col-md-12">
                    <div className="card card-body bg-secondary">
                        <div className="row">
                            <div className="col-md-4">
                                <img className="img-fluid" src="image0.jpg" alt=""/>
                            </div>
                            <div className="col-md-8">
                                <div itemscope itemtype="https://schema.org/Person">
                                    <h1 itemprop="name">Rodrigo García</h1>
                                </div>
                                <div>
                                    <h3>Junior Developer</h3>
                                </div>
                                <div>
                                    <p>Desarrollador de sitios web y landing page. Con capacidades de resolución de conflictos y de aprender nuevas tecnologías para estar siempre a la vanguardia.</p>
                                    <a href="/hireme">Hire Me</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </Layout>
    )
}