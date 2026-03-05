const Project = ({ projects }) => {
  return (
    <>
      {projects.map((data, i) => (
        <article
          className="project_card"
          key={i}
          data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
        >
          <div className="project_card_image_wrap">
            <img
              src={data.imageURL}
              alt={data.title}
              className="project_card_image"
            />
            <div className="project_card_overlay">
              <a
                href={data.demo}
                rel="noreferrer"
                target="_blank"
                className="project_card_btn project_card_btn_primary"
              >
                <i className="uil uil-globe" />
                Visit Site
              </a>
              {data?.github && (
                <a
                  href={data.github}
                  rel="noreferrer"
                  target="_blank"
                  className="project_card_btn project_card_btn_secondary"
                >
                  <i className="uil uil-github" />
                  GitHub
                </a>
              )}
            </div>
          </div>
          <div className="project_card_body">
            <h3 className="project_card_title">{data.title}</h3>
            <div
              className="project_card_description"
              dangerouslySetInnerHTML={{
                __html:
                  data?.description ||
                  `<p>No description available for this project.</p>`,
              }}
            />
            <div className="project_card_actions">
              <a
                href={data.demo}
                rel="noreferrer"
                target="_blank"
                className="button button_flex project_card_link"
              >
                Visit Site
                <i className="uil uil-arrow-right button_icon" />
              </a>
              {data?.github && (
                <a
                  href={data.github}
                  rel="noreferrer"
                  target="_blank"
                  className="button button_flex project_card_link project_card_link_outline"
                >
                  <i className="uil uil-github" />
                  Code
                </a>
              )}
            </div>
          </div>
        </article>
      ))}
    </>
  );
};

export default Project;
