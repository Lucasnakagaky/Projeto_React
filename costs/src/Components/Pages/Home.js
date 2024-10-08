import style from './Home.module.css'
import saving from '../../img/savings.svg'
import LinkButton from '../Layout/LinkButton';

function Home() {
    return (
        <section className={style.home_container}>
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to="/newproject" text="Criar Projeto" />
            <img src={saving} alt="Costs" />
        </section>
    )
}

export default Home;