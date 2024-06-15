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
      <div className="flex justify-between flex-col p-3 h-full w-full">
        <div className="shadow-xl border-b-4 border-slate-800 pb-8 mb-8">
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
              src="https://img.shields.io/badge/MUI-0081CB?style=flat-square&logo=mui&logoColor=white"
              alt="MUI"
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
          </div>
        </div>

        <div className="shadow-xl border-b-4 border-slate-800 pb-8 mb-8">
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

        <div className="shadow-xl border-b-4 border-slate-800 pb-8 mb-8">
          <h3 className="text-xl mb-4">CMS & HEADLESS CMS</h3>
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

        <div className="shadow-xl border-b-4 border-slate-800 pb-8 mb-8">
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
              src="https://img.shields.io/badge/-Bitbucket-0052CC?style=flat&logo=bitbucket&logoColor=white"
              alt="Bitbucket"
            />
            <img
              src="https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=docker&logoColor=white"
              alt="Docker"
            />
            <img
              src="https://img.shields.io/badge/-npm-CB3837?style=flat-square&logo=npm&logoColor=white"
              alt="npm"
            />
            <img
              src="https://img.shields.io/badge/-Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=white"
              alt="Firebase"
            />
            <img
              src="https://img.shields.io/badge/-Webpack-8DD6F9?style=flat-square&logo=webpack&logoColor=white"
              alt="Webpack"
            />
            <img
              src="https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=white"
              alt="Vite"
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
              alt="Adobe Photoshop"
              src="https://img.shields.io/badge/Adobe%20Photoshop-31A8FF?style=flat-square&logo=adobe-photoshop&logoColor=white&labelColor=31A8FF"
            />
            <img
              alt="Figma"
              src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=figma&logoColor=white&labelColor=F24E1E"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">Tech Stack</span>
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
