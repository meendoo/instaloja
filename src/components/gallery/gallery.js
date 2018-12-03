import React, { Component } from 'react'
import 'react-photoswipe/lib/photoswipe.css';
import { PhotoSwipeGallery} from 'react-photoswipe';
import Tick from '../utils/tick'
import Container from '../layout/container'
import './photoswipe-fix.scss'
import styles from './gallery.module.scss'
// import Button from '../button/'

export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true,
            imgsToShow: 10
        }
        this.options = {
            history: false,
            showHideOpacity: true,
            getThumbBoundsFn: false,
            bgOpacity: 0.95
        }
    }
    
    handleClose = () => {
        this.setState({isOpen: false});
    };

    getThumbnailContent = (item) => {
        return (
            <img className={styles.thumbnail} alt={'Imagem'} src={item.fluidSrc} width={200} height={200}/>
        );
    }

    render() {
        let items = [];
        let edges = this.props.data.edges;
        edges.slice(0, this.state.imgsToShow).forEach(img => {
            let fluidSrc = img.node.childImageSharp.fluid.src;
            let {src, width, height} = img.node.childImageSharp.original;
            let item = {};
            item.fluidSrc = fluidSrc;
            item.src = src;
            item.w = width;
            item.h = height;
            items.push(item);
        });

        return (
            <Container className={styles.gallery}>
                <h2>NOSSOS PROJETOS<Tick/></h2>
                <PhotoSwipeGallery items={items} options={this.options} thumbnailContent={this.getThumbnailContent}/>
                {this.state.imgsToShow >= edges.length ? '' : <button onClick={() => this.setState({imgsToShow: this.state.imgsToShow + 10})}>Ver Mais</button>}
            </Container>
        )
    }
}
