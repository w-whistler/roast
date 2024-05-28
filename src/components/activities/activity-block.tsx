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
};

export default function ActivityBlock({
  className,
  size = 32,
  value,
}: ActivityBlockProps) {
  const getBlockBgOpacity = () => {
    if (value < ACTIVITY_LEVEL_ONE) {
      return 1;
    }
    if (value < ACTIVITY_LEVEL_TWO) {
      return 0.7;
    }
    if (value < ACTIVITY_LEVEL_THREE) {
      return 0.5;
    }
    return 0.2;
  };

  return (
    <div
      className={cn(className, 'rounded-[3px]')}
      style={{
        width: size,
        height: size,
        backgroundColor: `rgba(3, 255, 209, ${getBlockBgOpacity()})`,
      }}
    />
  );
}
