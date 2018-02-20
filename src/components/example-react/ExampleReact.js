// @flow
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { updateTimestamp } from '../../shared/actions'
import { getOtherFakeData, getConvertedTime } from '../../shared/helpers'
import styles from './example-react.scss'

class ExampleReact extends PureComponent {
  constructor(props: any) {
    super(props)

    this.state = {
      form: { name: '', movies: '' }
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(event) {
    this.state.form[event.target.name] = event.target.value
    this.setState({ form: this.state.form })
  }

  onSubmit(event) {
    event.preventDefault()
    this.props.dispatch(updateTimestamp())
    getConvertedTime(this.props.dispatch)
    getOtherFakeData(this.props.dispatch, this.state.form)
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className="form-post">
          <form onSubmit={this.onSubmit}>
            <input
              name="name"
              value={this.props.name}
              onChange={this.onChange} />
            <input
              name="movies"
              value={this.props.movies}
              onChange={this.onChange} />
            <button className="btn btn-success" type="submit">
              Submit
            </button>
          </form>
          {this.props.theReturnedPostData.values && (
            <div>
              <p>
                Name: {this.props.theReturnedPostData.values.name} -{' '}
                {this.props.theReturnedPostData.values.movies}
              </p>
              <p>
                Time From Backend: {this.props.theReturnedPostData.createdAt}
              </p>
            </div>
          )}
          <div>
            {this.props.convertTime && (
              <p>Get currentTime: {this.props.convertTime}</p>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  timeStamp: state.exampleReactDemo.timeStamp,
  convertTime: state.exampleReactDemo.convertTime,
  theReturnedPostData: state.exampleReactDemo.theReturnedPostData
}))(ExampleReact)
