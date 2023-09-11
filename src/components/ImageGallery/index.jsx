import { ImageGalleryItem } from 'components/ImageGalleryItem';
import React, { Component } from 'react';
import ReactModal from 'react-modal';

export class ImageGallery extends Component {
  state = {
    showModal: false,
  };

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };
  render() {
    const { img } = this.props
    const {showModal} = this.state
    return (
      <>
        <ImageGallery>
          {img &&
            img.map(item => (
              <ImageGalleryItem
                key={item.id}
                itemImg={item}
                onOpenModal={this.handleOpenModal}
              />
            ))}
        </ImageGallery>
        <ReactModal
          isOpen={showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleCloseModal}
        >Hello</ReactModal>
      </>
    );
  }
}
