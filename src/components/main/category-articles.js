/** @jsx jsx */
import { jsx } from "theme-ui";
import { Box, Link } from "theme-ui";
import { Link as GatsbyLink } from "gatsby";
import { FiArrowRightCircle } from "react-icons/fi";

const CategoryArticles = ({ mdxChildren }) => {
  if (!mdxChildren) return null;
  return (
    <Box
      sx={{
        mt: 2,
        py: 2,
        borderTopStyle: "solid",
        borderTopWidth: "1px",
        borderTopColor: "borderLeft",
      }}
    >
      Artykuły w kategorii:
      <ul
        sx={{
          spacing: 3,
          marginTop: 1,
          listStyle: "none",
        }}
      >
        {mdxChildren.map(({ slug, frontmatter: { title } }) => {
          const slugA = slug.replace(/\/$/, "");
          const linkTitle =
            title || slugA.substring(slugA.lastIndexOf("/") + 1);
          return (
            <li
              key={`mdx/${slug}`}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <FiArrowRightCircle
                sx={{
                  mr: 2,
                }}
              />
              <Link as={GatsbyLink} to={`/${slug}`}>
                {linkTitle}
              </Link>
            </li>
          );
        })}
      </ul>
    </Box>
  );
};

export default CategoryArticles;
