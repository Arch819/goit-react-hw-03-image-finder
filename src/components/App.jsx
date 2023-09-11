import { Component } from 'react';
import { Button } from './Button';
import { ImageGallery } from './ImageGallery';
import { Loader } from './Loader';
// import { Modal } from './Modal';
import { Searchbar } from './Searchbar';
import { getImg } from 'services/fetchImg';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    img: [],
    searchValue: '',
    page: 1,
    totalPage: 0,
    isLoading: false,
    showModal: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchValue !== this.state.searchValue) {
      this.setState({ isLoading: true, page: 1 });
      // try {
      getImg(this.state.searchValue, this.state.page)
        .then(data =>
          this.setState(
            {
              img: data.hits,
              totalPage: Math.ceil(data.totalHits / 12),
            },
            () => console.log(this.state.totalPage)
          )
        )
        .catch(error => this.setState({ error: error.message }))
        .finally(() => this.setState({ isLoading: false }));
    }
    if (prevState.page !== this.state.page) {
      this.setState({ isLoading: true });

      getImg(this.state.searchValue, this.state.page)
        .then(data =>
          this.setState(prevState => ({
            img: [...prevState.img, ...data.hits],
          }))
        )
        .catch(error => this.setState({ error: error.message }))
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  onSubmit = value => {
    this.setState({ searchValue: value }, () => console.log(value));
  };

  onChangePage = () => {
    console.log(this.state.page);
    this.setState(
      prevState => ({ page: prevState.page + 1 }),
      () => console.log(this.state.page)
    );
  };

  

  render() {
    const { img, isLoading, error, totalPage, page } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.onSubmit} />
        {error && <p>{error}</p>}
        <ImageGallery img={img}/>
        {isLoading && <Loader />}
        {totalPage > 1 && page < totalPage && (
          <Button onClick={this.onChangePage} />
        )}
      </Container>
    );
  }
}
