import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Rectangle,
  LabelList,
} from 'recharts';
import {  getDataForDiagram } from '../../redux/selectors/periodDataSelectors';
import styles from './Stats.module.scss';

const Stats = () => {

  const [isMobile, setIsMobile] = useState(false);
  const diagramData = useSelector(getDataForDiagram);

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
        return;
      }
      setIsMobile(false);
    };
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);
  return (
    <div className={styles.wrapper}>
      {' '}
      {diagramData && (
        <ResponsiveContainer width="100%" height="100%" minHeight={422}>
          <BarChart
            barCategoryGap="20%"
            height={422}
            data={diagramData}
            layout={isMobile ? 'vertical' : 'horizontal'}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            {isMobile ? (
              <XAxis type="number" hide />
            ) : (
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
            )}
            {isMobile ? (
              <YAxis type="category" hide dataKey="name" />
            ) : (
              <YAxis type="number" axisLine={false} tick={true} />
            )}
            {/* <XAxis type="number" />
        <YAxis type="category" dataKey="name" /> */}

            {!isMobile && (
              <CartesianGrid vertical={false} strokeDashArray="7 5 2" />
            )}
            <Bar
              maxBarSize={isMobile ? 30 : 38}
              shape={
                <Rectangle
                  radius={isMobile ? [0, 10, 10, 0] : [10, 10, 0, 0]}
                />
              }
              dataKey="data"
              fill="#FF751D"
              // shape={<TriangleBar />}
              label={{ position: 'top', fill: '#52555F' }}
            >
              {diagramData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={index === 0 || index % 3 === 0 ? '#FF751D' : '#FFDAC0'}
                />
              ))}
              {isMobile && (
                <LabelList dataKey="name" position="center" fill="#52555F " />
              )}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};
export default Stats;
