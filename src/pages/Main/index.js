import React, { Component } from 'react';
import moment from 'moment';
import api from '../../services/api';

import logo from '../../assets/logo.png';

import { Container, Form } from './styles';
import CompareList from '../../components/CompareList';

export default class Main extends Component {
  state = {
    loading: false,
    repositoryError: false,
    repositoryInput: '',
    repositories: []
  };

  async componentDidMount() {
    this.setState({ loading: true });

    this.setState({
      loading: false,
      repositories: await this.getLocalRepositories()
    });
  }

  handleAddRepository = async e => {
    e.preventDefault();

    this.setState({ loading: true });

    const { repositoryInput, repositories } = this.state;

    try {
      const { data: repository } = await api.get(`/repos/${repositoryInput}`);

      repository.lastCommit = moment(repository.pushed_at).fromNow();

      this.setState({
        repositoryInput: '',
        repositories: [...repositories, repository],
        repositoryError: false
      });

      const localRepositories = await this.getLocalRepositories();

      await localStorage.setItem(
        '@GitCompare:repositories',
        JSON.stringify([...localRepositories, repository])
      );
    } catch (err) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  getLocalRepositories = async () =>
    JSON.parse(await localStorage.getItem('@GitCompare:repositories')) || [];

  render() {
    return (
      <Container>
        <img src={logo} alt="GitHub Compare" />

        <Form
          withError={this.state.repositoryError}
          onSubmit={this.handleAddRepository}
        >
          <input
            type="text"
            placeholder="usuário/repositório"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">
            {this.state.loading ? (
              <i className="fa fa-spinner fa-pulse" />
            ) : (
              'OK'
            )}
          </button>
        </Form>

        <CompareList repositories={this.state.repositories} />
      </Container>
    );
  }
}
