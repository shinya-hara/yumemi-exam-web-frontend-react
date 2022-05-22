import { Button, Checkbox, Col, Layout, Row, Space } from 'antd';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { Header, Content } from 'antd/lib/layout/layout';
import { useCallback } from 'react';
import { LineChartPopulation } from '../components/LineChartPopulation';
import { usePrefecturePopulation } from '../hooks/usePrefecturePopulation';
import { GithubOutlined } from '@ant-design/icons';

export const PageIndex = () => {
  const { prefectures, prefectureOptions, setSelectedPrefectures, chartData } =
    usePrefecturePopulation();

  const onChange = useCallback(
    (checkedValues: Array<CheckboxValueType>) => {
      const selected = prefectures.filter((pref) =>
        checkedValues.includes(pref.prefCode),
      );
      setSelectedPrefectures(selected);
    },
    [prefectures, setSelectedPrefectures],
  );

  return (
    <Layout>
      <Header
        style={{ display: 'flex', alignItems: 'center', background: '#d9d9d9' }}
      >
        <span>ゆめみ フロントエンド試験</span>
        <Button
          type="text"
          shape="circle"
          icon={<GithubOutlined />}
          href="https://github.com/shinya-hara/yumemi-exam-web-frontend-react"
          target="_blank"
          style={{ marginLeft: 'auto' }}
        />
      </Header>
      <Content
        style={{ minHeight: 'calc(100vh - 64px)', padding: ' 20px 50px' }}
      >
        <div style={{ marginBottom: 50 }}>
          <h1>都道府県別総人口</h1>
          <Checkbox.Group onChange={onChange}>
            <Row>
              {prefectureOptions.map((pref) => (
                <Col key={pref.value} xs={8} sm={6} md={4} lg={3} xl={2}>
                  <Checkbox value={pref.value}>{pref.label}</Checkbox>
                </Col>
              ))}
            </Row>
          </Checkbox.Group>
        </div>

        {!!chartData.length && <LineChartPopulation data={chartData} />}
      </Content>
    </Layout>
  );
};
