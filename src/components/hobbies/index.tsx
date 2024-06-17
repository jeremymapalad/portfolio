import { skeleton } from '../../utils';

const SkillCard = ({ loading }: { loading: boolean }) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 12; index++) {
      array.push(
        <div key={index}>
          {skeleton({ widthCls: 'w-16', heightCls: 'h-4', className: 'm-1' })}
        </div>,
      );
    }

    return array;
  };

  const renderSkills = () => {
    return (
      <div className="flex justify-between flex-col h-full w-full">
        <ul className="list-disc ml-6">
          <li className="mb-2">
            <span className="font-semibold">
              🎸 Playing musical instruments, especially guitar.
            </span>{' '}
            Check out my{' '}
            <a
              href="https://www.youtube.com/channel/@jeremymapalad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              YouTube channel
            </a>{' '}
            if you're interested.
          </li>
          <li className="mb-2">
            <span className="font-semibold">📖 Reading books:</span> My top 3
            favorites are <em>Atomic Habits</em>,{' '}
            <em>The Obstacle Is the Way</em>, and <em>Eat That Frog</em>.
          </li>
          <li className="mb-2">
            <span className="font-semibold">🎮 Playing video games.</span> I
            enjoy exploring various genres, from strategy and RPGs to puzzle and
            adventure games. Some of my favorites include{' '}
            <em>The Legend of Zelda: Breath of the Wild</em>,{' '}
            <em>Monster Hunter</em>, and <em>League of Legends</em>.
          </li>
          <li>
            <span className="font-semibold">
              🖥️ Tech-focused YouTube channel:
            </span>{' '}
            I'm planning to launch a channel to share insights and tutorials,
            helping others while expanding my skills in technology and video
            production.
          </li>
        </ul>
      </div>
    );
  };

  return (
    <div className="card shadow-lg compact bg-base-100 hidden md:block">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title border-b-2 border-slate-800 pb-4">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">
                Other Hobbies:
              </span>
            )}
          </h5>
        </div>
        <div className="p-3 flow-root">
          <div className="-m-1 flex flex-wrap justify-center">
            {loading ? renderSkeleton() : renderSkills()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
