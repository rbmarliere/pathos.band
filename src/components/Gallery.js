import React, { Component } from "react";
import PropTypes from "prop-types";
import Gall from "react-photo-gallery";
import Lightbox from "react-images";

const columns = (containerWidth) =>
{
    let columns = 1;
    if (containerWidth >= 500) columns = 2;
    if (containerWidth >= 900) columns = 3;
    if (containerWidth >= 1500) columns = 4;
    return columns;
};

class Gallery extends Component
{
    constructor(props)
    {
        super(props);
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.state = { currentImage: 0 };
    }

    openLightbox(event, obj)
    {
        this.setState({
            currentImage: obj.index,
            lightboxIsOpen: true,
        });
    }

    closeLightbox()
    {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }

    gotoPrevious()
    {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }

    gotoNext()
    {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }

    render()
    {
        return (
            <div className="Gallery">
                <Gall photos={ this.props.photos } columns={ columns } onClick={ this.openLightbox }/>
                <Lightbox
                    images={ this.props.photos }
                    onClose={this.closeLightbox}
                    onClickPrev={this.gotoPrevious}
                    onClickNext={this.gotoNext}
                    currentImage={this.state.currentImage}
                    isOpen={this.state.lightboxIsOpen}
                />
            </div>
        );
    }
}

Gallery.propTypes =
{
    photos: PropTypes.array.isRequired
};

export default Gallery;

