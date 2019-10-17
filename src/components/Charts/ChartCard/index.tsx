import React from 'react';
import { Card } from 'antd';

class ChartCard extends React.PureComponent {
  renderContent() {
      return (
          <div className={styles.chartCard}>

        </div>
        )
    }

  render() {
    return <Card bodyStyle={{ padding: '20px 24px 8px 24px' }}>{this.renderContent()}</Card>
  }
}

export default ChartCard
