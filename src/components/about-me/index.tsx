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
              I'm a web developer with experience across various domains, having
              worked in both corporate settings and as a freelancer.
            </p>
            <p className="mb-4">
              <u>My expertise centers on frontend development</u>, with a strong
              focus on React.js and Redux for state management, enhanced by
              TypeScript for robust and type-safe applications. I am well-versed
              in integrating APIs. Currently, I am advancing my skills in
              Next.js to build efficient and scalable server-side rendered web
              applications.
            </p>
            <p className="mb-4">
              <u>In UI design</u>, I specialize in creating modern and
              responsive interfaces using Tailwind CSS, Bootstrap, or Material
              UI (MUI) for efficient and stylish layouts, with a strong emphasis
              on responsive mobile design. I ensure that designs are
              pixel-perfect and meticulously adhere to design specifications.
            </p>
            <p className="mb-4">
              <u>On the backend</u>, I am proficient in Node.js and Express.js
              for building robust server-side applications. I leverage MongoDB
              and Mongoose for efficient data modeling and storage, ensuring
              scalability and performance. Additionally, I integrate AWS S3 for
              secure file storage and retrieval and use tools like Postman for
              API testing and validation.
            </p>
            <p className="mb-4">
              <u>
                I'm experienced in leveraging third-party tools and services
              </u>{' '}
              such as AWS for scalable computing and secure storage, Firebase
              for backend services, Git for version control, Docker for
              containerization, and seamlessly integrating APIs to enhance
              functionality and performance in software development and cloud
              computing.
            </p>
            <p className="mb-4">
              I also have extensive experience in WordPress, specializing in
              crafting custom themes from scratch. My expertise ensures that
              these themes are tailored precisely to client requirements,
              delivering enhanced user experiences through responsive design and
              intuitive functionality.
            </p>
            <p>
              I'm driven to continue advancing as a web developer, seeking
              opportunities that foster continuous learning and professional
              growth.
            </p>
          </div>
          <div className="flex-1 card shadow-lg compact bg-base-100 p-8">
            <div className="shadow-xl border-b-2 border-slate-800 pb-8 mb-8">
              <h3 className="text-xl mb-4">Frontend</h3>
              <div className="flex w-full flex-wrap gap-1">
                <img
                  alt="React.js"
                  src="https://img.shields.io/badge/React-01d5fc?style=flat-square&logo=react&logoColor=white&labelColor=01d5fc"
                />
                <img
                  alt="Next.js"
                  src="https://img.shields.io/badge/Next-000000?style=flat-square&logo=next.js&logoColor=white"
                />
                <img
                  src="https://img.shields.io/badge/-Redux-764ABC?style=flat-square&logo=redux&logoColor=white"
                  alt="Redux"
                />
                <img
                  src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"
                  alt="JavaScript"
                />
                <img
                  src="https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white"
                  alt="TypeScript"
                />
                <img
                  src="https://img.shields.io/badge/-jQuery-0769AD?style=flat-square&logo=jquery&logoColor=white"
                  alt="jQuery"
                />

                <img
                  src="https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white"
                  alt="CSS3"
                />
                <img
                  src="https://img.shields.io/badge/-Sass-CC6699?style=flat-square&logo=sass&logoColor=white"
                  alt="Sass"
                />
                <img
                  alt="Ant Design"
                  src="https://img.shields.io/badge/Ant%20Design-0170FE?style=flat-square&logo=ant-design&logoColor=white"
                />
                <img
                  src="https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white"
                  alt="Tailwind CSS"
                />
                <img
                  src="https://img.shields.io/badge/-Bootstrap-7952B3?style=flat-square&logo=bootstrap&logoColor=white"
                  alt="Bootstrap"
                />
                <img
                  src="https://img.shields.io/badge/MUI-0081CB?style=flat-square&logo=mui&logoColor=white"
                  alt="MUI"
                />
              </div>
            </div>

            <div className="shadow-xl border-b-2 border-slate-800 pb-8 mb-8">
              <h3 className="text-xl mb-4">Backend</h3>
              <div className="flex w-full flex-wrap gap-1">
                <img
                  src="https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=node.js&logoColor=white"
                  alt="Node.js"
                />
                <img
                  src="https://img.shields.io/badge/-Express-000000?style=flat-square&logo=express&logoColor=white"
                  alt="Express"
                />
                <img
                  src="https://img.shields.io/badge/-PHP-777BB4?style=flat-square&logo=php&logoColor=white"
                  alt="PHP"
                />
                <img
                  alt="Java"
                  src="https://img.shields.io/badge/Java-007396?style=flat-square&logo=java&logoColor=white"
                />
                <img
                  alt="Spring Boot"
                  src="https://img.shields.io/badge/Spring%20Boot-6DB33F?style=flat-square&logo=spring-boot&logoColor=white"
                />
              </div>
            </div>

            <div className="shadow-xl border-b-2 border-slate-800 pb-8 mb-8">
              <h3 className="text-xl mb-4">CMS & Headless CMS</h3>
              <div className="flex w-full flex-wrap gap-1">
                <img
                  src="https://img.shields.io/badge/-WordPress-21759B?style=flat-square&logo=wordpress&logoColor=white"
                  alt="WordPress"
                />
                <img
                  src="https://img.shields.io/badge/-Strapi-2E7EEA?style=flat-square&logo=strapi&logoColor=white"
                  alt="Strapi"
                />
                <img
                  src="https://img.shields.io/badge/-Shopify-9cf?style=flat-square&logo=shopify&logoColor=white"
                  alt="Shopify"
                />
              </div>
            </div>

            <div className="shadow-xl border-b-2 border-slate-800 pb-8 mb-8">
              <h3 className="text-xl mb-4">Database</h3>
              <div className="flex w-full flex-wrap gap-1">
                <img
                  src="https://img.shields.io/badge/-MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white"
                  alt="MySQL"
                />
                <img
                  src="https://img.shields.io/badge/-PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white"
                  alt="PostgreSQL"
                />
                <img
                  src="https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white"
                  alt="MongoDB"
                />
                <img
                  src="https://img.shields.io/badge/-Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=white"
                  alt="Firebase"
                />
              </div>
            </div>

            <div className="shadow-xl border-slate-800">
              <h3 className="text-xl mb-4">Other Tools & Platforms</h3>
              <div className="flex w-full flex-wrap gap-1">
                <img
                  src="https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white"
                  alt="Git"
                />
                <img
                  src="https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github&logoColor=white"
                  alt="GitHub"
                />
                <img
                  src="https://img.shields.io/badge/-GitLab-FCA121?style=flat-square&logo=gitlab&logoColor=white"
                  alt="GitLab"
                />
                <img
                  src="https://img.shields.io/badge/-JIRA-0052CC?style=flat&logo=jira&logoColor=white"
                  alt="JIRA"
                />
                <img
                  src="https://img.shields.io/badge/-npm-CB3837?style=flat-square&logo=npm&logoColor=white"
                  alt="npm"
                />
                <img
                  src="https://img.shields.io/badge/-Bitbucket-0052CC?style=flat&logo=bitbucket&logoColor=white"
                  alt="Bitbucket"
                />
                <img
                  src="https://img.shields.io/badge/AWS-orange?style=flat-square&logo=amazon-aws&logoColor=white"
                  alt="AWS Cloud"
                />
                <img
                  src="https://img.shields.io/badge/-Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=white"
                  alt="Firebase"
                />
                <img
                  src="https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=docker&logoColor=white"
                  alt="Docker"
                />
                <img
                  src="https://img.shields.io/badge/Kubernetes-gray?style=flat-square&logo=kubernetes&logoColor=white"
                  alt="Kubernetes Cluster"
                />
                <img
                  src="https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=white"
                  alt="Vite"
                />
                <img
                  src="https://img.shields.io/badge/-Webpack-8DD6F9?style=flat-square&logo=webpack&logoColor=white"
                  alt="Webpack"
                />
                <img
                  src="https://img.shields.io/badge/-Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white"
                  alt="Netlify"
                />
                <img
                  src="https://img.shields.io/badge/-Heroku-430098?style=flat-square&logo=heroku&logoColor=white"
                  alt="Heroku"
                />
                <img
                  alt="Figma"
                  src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=figma&logoColor=white&labelColor=F24E1E"
                />
                <img
                  alt="Adobe Photoshop"
                  src="https://img.shields.io/badge/Adobe%20Photoshop-31A8FF?style=flat-square&logo=adobe-photoshop&logoColor=white&labelColor=31A8FF"
                />
              </div>
            </div>
          </div>
        </div>

        <p className="mb-4">
          <b>
            Please note that most of my work is protected by non-disclosure
            agreements (NDAs)
          </b>
          , so I can only show a few projects.{' '}
        </p>
        <p>
          The self-initiated projects listed here are intended to showcase the
          quality and style of my professional work, which I undertake in my
          free time.
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
