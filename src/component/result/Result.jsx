import React from 'react'

import { Tab, Tabs } from 'material-ui/Tabs'

import PluginViewer from '../plugin/PluginViewer'

import ListViz from '../vizualization/List'
import TableViz from '../vizualization/Table'

export default class Result extends React.Component {

  constructor(props) {
    super(props)
    this.vizualizations = [ListViz, TableViz].concat(this.props.vizualizations)
  }

  render() {
    const style = {
      height: "100%",
      width: "70%",
      float: "right"
    }
    return (
      <div style={style}>
        <Tabs>
          <Tab label="Search Results">
            <PluginViewer
              plugins={this.vizualizations}
              networkSummaries={this.props.lucene.get('networkSummaries')}
              cart={this.props.cart}
              cartActions={this.props.cartActions}
            />
          </Tab>
        </Tabs>
      </div>
    )
  }

}



