import React from 'react';
import { connect } from 'dva';
import { formatMessage, FormattedMessage } from 'umi-plugin-react/locale';
import { Dispatch } from 'redux';
import {
  Card,
  Table,
  Divider,
  Progress,
  Badge,
  Avatar,
  Tooltip,
  Button,
  Dropdown,
  Icon,
  Menu,
} from 'antd';
import { ColumnProps } from 'antd/lib/table';
import PageWrapperWithHeader from '@/layouts/PageWrapperWithHeader';
import AvatarList from '@/components/AvatarList';
import CreateForm from './components/CreateForm';
import styles from './index.less';
import { ConnectState } from '@/models/connect';

interface TableListProps {
  dispatch: Dispatch<any>;
  list: Array<TableListData>;
}

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
  state = {
    dataList: [],
    visible: false,
  };

  columns: ColumnProps<TableListData>[] = [
    {
      title: formatMessage({ id: 'app.fields.id' }),
      key: 'id',
      dataIndex: 'id',
      render: text => <span>#{text}</span>,
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
      render: val => {
        const status: Array<'success' | 'processing' | 'default' | 'error' | 'warning'> = [
          'default',
          'processing',
          'success',
        ];

        const text = [
          'app.text.status.start.wait',
          'app.text.status.processing',
          'app.text.status.done',
        ];

        return <Badge status={status[val]} text={formatMessage({ id: text[val] })} />;
      },
    },
    {
      title: formatMessage({ id: 'app.fields.progress' }),
      key: 'progress',
      dataIndex: 'progress',
      render: (progress, record) => {
        return (
          <Progress
            status={progress < 100 && progress > 0 ? 'active' : undefined}
            percent={progress}
            style={{ width: 160 }}
          />
        );
      },
    },
    {
      title: formatMessage({ id: 'app.fields.owner' }),
      key: 'owner',
      dataIndex: 'owner',
      render: (owner, record) => (
        <Tooltip title={owner.name}>
          <Avatar src={owner.avatar} type="small" style={{ cursor: 'pointer' }} />
        </Tooltip>
      ),
    },
    {
      title: formatMessage({ id: 'app.fields.teammate' }),
      key: 'teammate',
      dataIndex: 'teammate',
      render: (list, record) => {
        return (
          <AvatarList>
            {list.map((item, index: number) => {
              return (
                <AvatarList.Item
                  size="small"
                  key={`${item.id}-avatar-${index}`}
                  src={item.avatar}
                  tips={item.name}
                />
              );
            })}
          </AvatarList>
        );
      },
    },
    {
      title: formatMessage({ id: 'app.fields.manipulation' }),
      key: 'operation',
      render: (text, record) => (
        <span>
          <a href="javascript:;" onClick={() => this.handleModalVisible(true)}>
            {formatMessage({ id: 'app.manipulation.edit' })}
          </a>
          <Divider type="vertical" />
          <a href="javascript:;">{formatMessage({ id: 'app.manipulation.delete' })}</a>
        </span>
      ),
    },
  ];

  componentDidMount() {
    this.initilizeData();
  }

  initilizeData = () => {
    this.props.dispatch({ type: 'list/createIterator', payload: {} });
  };

  handleMenuClick = () => {};

  handleModalVisible = (visible?: boolean) => {
    this.setState({ visible: !!visible });
  };

  render() {
    const { dispatch, list: { list } } = this.props;
    const { visible } = this.state;

    const menu = (
      <Menu onClick={this.handleMenuClick} selectedKeys={[]}>
        <Menu.Item key="remove">{formatMessage({ id: 'app.manipulation.delete' })}</Menu.Item>
        <Menu.Item key="approval">
          {formatMessage({ id: 'app.manipulation.approval.batch' })}
        </Menu.Item>
      </Menu>
    );

    return (
      <PageWrapperWithHeader
        title={formatMessage({ id: 'menu.list.tablelist' })}
        description={formatMessage({ id: 'list.table.description' })}>
        <Card bordered={false}>
          <div className={styles.tableListOperator}>
            <Button icon="plus" type="primary" onClick={() => this.handleModalVisible(true)}>
              <FormattedMessage id="app.manipulation.create" />
            </Button>
            <span>
              <Button>{formatMessage({ id: 'app.manipulation.batch' })}</Button>
              <Dropdown overlay={menu}>
                <Button>
                  <FormattedMessage id="app.manipulation.more" /> <Icon type="down" />
                </Button>
              </Dropdown>
            </span>
          </div>
          <Table<TableListData> columns={this.columns} dataSource={list} />
        </Card>
        <CreateForm
          dispatch={dispatch}
          onCancel={() => this.handleModalVisible(false)}
          visible={visible}
        />
      </PageWrapperWithHeader>
    );
  }
}

export default connect(({ list }: ConnectState) => ({
  list,
}))(TableList);
