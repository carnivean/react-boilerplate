/*
 *
 * Form
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectForm from './selectors';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';

export class Form extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.form}>
      <Helmet
        title="Form"
        meta={[
          { name: 'description', content: 'Description of Form' },
        ]}
      />
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

const mapStateToProps = selectForm();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
