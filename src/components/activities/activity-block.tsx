import {
  ACTIVITY_LEVEL_ONE,
  ACTIVITY_LEVEL_THREE,
  ACTIVITY_LEVEL_TWO,
} from '../../constants';
import { cn } from '../../lib/utils';

type ActivityBlockProps = {
  className?: string;
  size?: number;
  value: number;
  opacity?: number;
  onClick?: () => void;
};

export default function ActivityBlock({
  className,
  size = 32,
  value,
  opacity = 1,
  onClick,
}: ActivityBlockProps) {
  const getBlockBgColor = () => {
    if (value < ACTIVITY_LEVEL_ONE) {
      return '#03FFD1';
    }
    if (value < ACTIVITY_LEVEL_TWO) {
      return '#02CBA6';
    }
    if (value < ACTIVITY_LEVEL_THREE) {
      return '#02997E';
    }
    return '#026754';
  };

  return (
    <div
      className={cn(className, 'rounded-[3px]')}
      style={{
        width: size,
        height: size,
        backgroundColor: getBlockBgColor(),
        opacity,
      }}
      onClick={onClick}
    />
  );
}
