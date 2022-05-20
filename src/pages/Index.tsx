import { Checkbox, Col, Layout, Row } from 'antd';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { Header, Content } from 'antd/lib/layout/layout';
import { useCallback } from 'react';
import { LineChart } from '../components/LineChart';
import { usePrefecturePopulation } from '../hooks/usePrefecturePopulation';

export const PageIndex = () => {
  const { prefectureOptions } = usePrefecturePopulation();

  const data = [
    {
      year: 2000,
      A: 4000,
      B: 2400,
    },
    {
      year: 2005,
      A: 3000,
      B: 1398,
    },
    {
      year: 2010,
      A: 2000,
      B: 9800,
    },
    {
      year: 2015,
      A: 2780,
      B: 3908,
    },
    {
      year: 2020,
      A: 1890,
      B: 4800,
    },
    {
      year: 2025,
      A: 2390,
      B: 3800,
    },
    {
      year: 2030,
      A: 3490,
      B: 4300,
    },
  ];

  const onChange = useCallback((checkedValues: Array<CheckboxValueType>) => {
    console.log(checkedValues);
  }, []);

  return (
    <Layout>
      <Header style={{ background: '#d9d9d9' }}>
        ゆめみ フロントエンド試験
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

        <LineChart data={data} />
      </Content>
    </Layout>
  );
};
