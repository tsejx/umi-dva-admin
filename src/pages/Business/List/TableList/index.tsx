import React from 'react';
import { formatMessage } from 'umi-plugin-react/locale';
// import moment from 'moment';
import { Card, Table, Divider, Progress, Form, Badge } from 'antd';
import { ColumnProps } from 'antd/lib/table';
import PageWrapperWithHeader from '@/layouts/PageWrapperWithHeader';
import CreateIteratorModal from './components/CreateIterator';
// import { IconFont } from '@/components/IconFont';

interface TableListProps {}

interface TableListState {
  dataList: TableListData[];
  visible: boolean;
}

interface TableListData {
  id: number;
  name: string;
  progress: number;
  status: number;
  key?: string | number;
}

class TableList extends React.Component<TableListProps, TableListState> {
  constructor(props: TableListProps) {
    super(props);
    this.state = {
      dataList: [],
      visible: false,
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  componentDidMount() {
    fetch('/api/list/table')
      .then(
        res => {
          if (res.ok) {
            return res.json();
          }
          throw new Error('Warning!');
        },
        err => console.log(err.message)
      )
      .then(res => {
        console.log(res);
        this.setState({
          dataList: res.list.map((item: TableListData) => {
            item.key = item.id;
            return item;
          }),
        });
      });
  }

  showModal() {
    this.setState({ visible: true });
  }

  hideModal() {
    this.setState({ visible: false })
  }

  render() {
    const { dataList, visible } = this.state;

    const columns: ColumnProps<TableListData>[] = [
      {
        title: formatMessage({ id: 'app.fields.id' }),
        key: 'id',
        dataIndex: 'id',
      },
      {
        title: formatMessage({ id: 'app.fields.name.iterator' }),
        key: 'name',
        dataIndex: 'name',
      },
      {
        title: formatMessage({ id: 'app.fields.time.start' }),
        key: 'startAt',
        dataIndex: 'startAt',
      },
      {
        title: formatMessage({ id: 'app.fields.time.end' }),
        key: 'endAt',
        dataIndex: 'endAt',
      },
      {
        title: formatMessage({ id: 'app.fields.status' }),
        key: 'status',
        dataIndex: 'status',
        render: (val, record) => {
          const status = ['default', 'processing', 'success'];
          const text = [
            'app.text.status.start.wait',
            'app.text.status.processing',
            'app.text.status.done',
          ];

          // TODO: Fix the bug
          return <Badge status={status[val]} text={formatMessage({ id: text[val] })} />;
        },
      },
      {
        title: formatMessage({ id: 'app.fields.progress' }),
        key: 'progress',
        dataIndex: 'progress',
        render: (text, record) => {
          return <Progress percent={record.progress} style={{ width: 160 }} />;
        },
      },
      {
        title: formatMessage({ id: 'app.fields.leader' }),
        key: 'leader',
        dataIndex: 'leader',
      },
      {
        title: formatMessage({ id: 'app.fields.manipulation' }),
        key: 'operation',
        render: (text, record) => (
          <span>
            <a href="javascript:;" onClick={this.showModal}>
              {formatMessage({ id: 'app.manipulation.edit' })}
            </a>
            <Divider type="vertical" />
            <a href="javascript:;">{formatMessage({ id: 'app.manipulation.delete' })}</a>
          </span>
        ),
      },
    ];

    return (
      <PageWrapperWithHeader
        title={formatMessage({ id: 'menu.list.basiclist' })}
        description={formatMessage({ id: 'list.table.description' })}>
        <Card bordered={false}>
          <Table<TableListData> columns={columns} dataSource={dataList} />
        </Card>
        {visible ? <CreateIteratorModal onCancel={this.hideModal} visible={visible} /> : null}
      </PageWrapperWithHeader>
    );
  }
}

export default TableList
