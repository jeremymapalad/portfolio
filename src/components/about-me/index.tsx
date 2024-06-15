import { Fragment } from 'react';
import { skeleton } from '../../utils';

const GithubProjectCard = ({ loading }: { loading: boolean }) => {
  // if (!loading) {
  //   return;
  // }

  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 1; index++) {
      array.push(
        <div className="card shadow-lg compact bg-base-100" key={index}>
          <div className="flex justify-between flex-col p-8 h-full w-full">
            <div>
              <div className="flex items-center">
                <span>
                  <h5 className="card-title text-lg">
                    {skeleton({
                      widthCls: 'w-32',
                      heightCls: 'h-8',
                      className: 'mb-1',
                    })}
                  </h5>
                </span>
              </div>
              <div className="mb-5 mt-1">
                {skeleton({
                  widthCls: 'w-full',
                  heightCls: 'h-4',
                  className: 'mb-2',
                })}
                {skeleton({ widthCls: 'w-full', heightCls: 'h-4' })}
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-grow">
                <span className="mr-3 flex items-center">
                  {skeleton({ widthCls: 'w-12', heightCls: 'h-4' })}
                </span>
                <span className="flex items-center">
                  {skeleton({ widthCls: 'w-12', heightCls: 'h-4' })}
                </span>
              </div>
              <div>
                <span className="flex items-center">
                  {skeleton({ widthCls: 'w-12', heightCls: 'h-4' })}
                </span>
              </div>
            </div>
          </div>
        </div>,
      );
    }

    return array;
  };

  const renderInfo = () => {
    return (
      <div className="p-3 h-full w-full">
        <div className="flex gap-4 mb-8">
          <div className="flex-1 card shadow-lg compact bg-base-100 p-8">
            <h2 className="text-lg mb-4">👨‍💻 Web Development</h2>
            <p className="mb-4">
              With over 6 years in web development within corporate
              environments, I specialize in React, CSS, and WordPress. My
              journey began in 2015 as a freelancer, focusing on creating
              pixel-perfect, responsive websites using CSS and JavaScript. This
              experience laid a solid foundation for my career.
            </p>

            <p className="mb-4">
              Expanding into WordPress, I developed custom themes and plugins
              tailored to client needs. When a project required React, I
              embraced the challenge, and it has since become a cornerstone of
              my toolkit alongside WordPress.
            </p>

            <p>
              I excel in crafting responsive, user-centric websites that surpass
              client expectations. Eager to grow in collaborative, innovative
              environments, I aim to learn from peers and tackle new web
              development challenges.
            </p>
          </div>
          <div className="flex-1 card shadow-lg compact bg-base-100 p-8">
            <h2 className="text-lg mb-4">🎸 Other interests and hobbies:</h2>
            <ul className="list-disc ml-6">
              <li className="mb-2">
                <span className="font-semibold">
                  Playing musical instruments, especially guitar.
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
                <span className="font-semibold">Reading books:</span> My top 3
                favorites are <em>Atomic Habits</em>,{' '}
                <em>The Obstacle Is the Way</em>, and <em>Eat That Frog</em>.
              </li>
              <li className="mb-2">
                <span className="font-semibold">Playing video games.</span> I
                enjoy exploring various genres, from strategy and RPGs to puzzle
                and adventure games. Some of my favorites include{' '}
                <em>The Legend of Zelda: Breath of the Wild</em>,{' '}
                <em>Monster Hunter</em>, and <em>League of Legends</em>.
              </li>
              <li>
                <span className="font-semibold">
                  Tech-focused YouTube channel:
                </span>{' '}
                I'm planning to launch a channel to share insights and
                tutorials, helping others while expanding my skills in
                technology and video production.
              </li>
            </ul>
          </div>
        </div>

        <p className="mb-4">
          Check out the projects listed below on GitHub and external platforms.{' '}
        </p>
        <p>
          <b>
            Please note that most of my work is protected by non-disclosure
            agreements (NDAs)
          </b>
          , so I can only show a few projects. The self-initiated projects
          listed here are intended to showcase the quality and style of my
          professional work, which I undertake in my free time.
        </p>
      </div>
    );
  };

  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <div className="card compact bg-base-100 shadow bg-opacity-40">
              <div className="card-body">
                <div className="mx-3 flex items-center justify-between mb-2">
                  <h5 className="card-title text-2xl opacity-90">
                    {loading ? (
                      skeleton({ widthCls: 'w-40', heightCls: 'h-8' })
                    ) : (
                      <span className="text-base-content">About Me</span>
                    )}
                  </h5>
                </div>
                <div className="col-span-2">
                  {loading ? renderSkeleton() : renderInfo()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default GithubProjectCard;
