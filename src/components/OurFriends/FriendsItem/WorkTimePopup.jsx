import {
  WorkTimeList,
  WorkTimeItem,
  WorkTimeText,
  WorkTimeItemCurrent,
} from './FriendsItem.styled';
import { format } from 'date-fns';

const dayNow = new Date();
const dayOfWeek = format(dayNow, 'iiiiii');

const WorkTimePopup = ({ shedule }) => {
  const workDays = shedule.map(item =>
    item.day === dayOfWeek.toUpperCase() ? (
      <WorkTimeItemCurrent key={item.day}>
        {item?.isOpen ? (
          <WorkTimeText>
            <span>{item.day}</span> {item.from}-{item.to}
          </WorkTimeText>
        ) : (
          <WorkTimeText>
            <span>{item.day}</span> Closed
          </WorkTimeText>
        )}
      </WorkTimeItemCurrent>
    ) : (
      <WorkTimeItem key={item.day}>
        {item?.isOpen ? (
          <WorkTimeText>
            <span>{item.day}</span> {item.from}-{item.to}
          </WorkTimeText>
        ) : (
          <WorkTimeText>
            <span>{item.day}</span> Closed
          </WorkTimeText>
        )}
      </WorkTimeItem>
    )
  );
  return <WorkTimeList>{workDays}</WorkTimeList>;
};

export default WorkTimePopup;