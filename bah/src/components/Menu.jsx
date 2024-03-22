import style from './Menu.module.css'

export default function Menu(){
    return(
        <div className={style['wrap-menu']}>
            <p >
                <a href="">Profiles</a>
            </p>
            <p >
                <a href="">Tecnologies</a>
            </p>
            <p >
                <a href="">Graphics</a>
            </p>
        </div>
    )

}