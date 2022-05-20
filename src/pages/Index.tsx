import { Checkbox, Col, Layout, Row } from 'antd';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { Header, Content } from 'antd/lib/layout/layout';
import { useCallback } from 'react';
import { usePrefecturePopulation } from '../hooks/usePrefecturePopulation';

export const PageIndex = () => {
  const { prefectureOptions } = usePrefecturePopulation();

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
      </Content>
    </Layout>
  );
};
