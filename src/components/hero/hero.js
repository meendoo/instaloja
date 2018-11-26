import React from 'react'
import styles from './hero.module.scss'
import { TimelineMax, TweenMax, Power4 } from 'gsap'
import Button from '../button'

const headlines = [
    ['A', 'SUA FARMÁCIA'],
    ['O', 'SEU COMÉRCIO'],
    ['A', 'SUA VENDA'],
    ['O', 'SEU NEGÓCIO']
];

export default class Hero extends React.Component {


    componentDidMount = () => {
        // this.animateBgHero();
        this.animateTitleHero();
    }

    updateTitles(target, data) {       
        target.innerHTML = data;
    }

    animateTitleHero = () => {
        let titleTl = new TimelineMax();
        let article = document.querySelector(`.${styles.article}`),
            business = document.querySelector(`.${styles.business}`);
        TweenMax.fromTo(`.${styles.cta}`, 0.5, {xPercent: -100, ease: Power4.easeIn, opacity: 0}, {xPercent: 0, opacity: 1, delay: 0.5});
        for (let i = 0; i < headlines.length; i++) {
            const headline = headlines[i];
            titleTl
                .call(this.updateTitles, [article, headline[0]], this, `article${i}`)
                .add(TweenMax.fromTo(article, 0.3, {rotationX: -90, opacity: 0, ease: Power4.easeIn}, {rotationX: 0, opacity: 1}), `article${i}`)
                .call(this.updateTitles, [business, headline[1]], this, `business${i}`)
                .add(TweenMax.fromTo(business, 0.3, {rotationX: -90, opacity: 0, ease: Power4.easeIn}, {rotationX: 0, opacity: 1}), `business${i}`)
            if (i !== headlines.length - 1) {
                titleTl
                    .add(TweenMax.to(article, 0.3, {rotationX: -90, opacity: 0, ease: Power4.easeIn, delay: 1}), `article${i}+=1.5`)
                    .add(TweenMax.to(business, 0.3, {rotationX: -90, opacity: 0, ease: Power4.easeIn, delay: 1}), `business${i}+=1.5`)
            }
        }
        titleTl.play();
    }

    animateBgHero = () => {
        let imgs = document.getElementsByClassName(styles.img);
        let heroTl = new TimelineMax();
        for (let i = 0; i < imgs.length; i++) {
            let img = imgs[i];
            heroTl
                .call(this.increaseZIndex.bind(this, img))
                .add( TweenMax.fromTo(img, 5, {transform: 'scale(1)', opacity: 0}, {transform: 'scale(1.1)', ease: Power4.easeOut, opacity: 1}), 'image')
                .add( TweenMax.to(img, 0.4, {opacity: 0}));
        }
        heroTl.repeat(-1);
    }

    increaseZIndex(target) {
        target.style.zIndex = Number(target.style.zIndex) + 1;
    }
    
    
    render() {
        const images = this.props.data.edges.map((edges, i) => {
            return <div key={'img'+i} className={styles.img} style={{backgroundImage: `url('${edges.node.childImageSharp.original.src}')`}}/>
        });
        return (
            <div className={styles.heroContainer}>
                <div className={styles.cta}>
                    <div className={styles.hero}>
                        <h1>COMECE JÁ<br/><span className={styles.article}>O</span> <em className={styles.business}>SEU COMÉRCIO</em></h1>
                        <Button to={"#contato"} title="monte sua loja"/>
                    </div>
                </div>
                <div className={styles.imageWrapper}>
                    {images}
                </div>
            </div>
        );
    }
}