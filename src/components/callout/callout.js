import React from 'react'
// import Container from '../layout/container'
import styles from './callout.module.scss';
import { TweenMax, Power1 } from 'gsap'
import Tick from '../utils/tick'

export default class callout extends React.Component {
  constructor(props){
    super(props);
    this.years = React.createRef();
    this.experience = React.createRef();
  }
  componentDidMount = () => {
    const years = {
      value: 0
    }
    const yearsSpan = this.years.current;
    const experienceSpan = this.experience.current;
    TweenMax.from(experienceSpan, 2, {autoAlpha: 0.5});
    TweenMax.to(years, 2, {value: 15, ease: Power1.easeOut, roundProps: {value: 1}, onUpdate: ()=> {yearsSpan.innerHTML = String(years.value).padStart(2, '0')}})
  }
  
  render() {
    return (
      <div className={styles.callout}>
        <h2 className={styles.title}>SÃO MAIS DE <em ref={this.experience}><span ref={this.years}>15</span> ANOS</em><br/>DE EXPERIÊNCIA</h2>
        <Tick/>
      </div>
    )
  }
}
