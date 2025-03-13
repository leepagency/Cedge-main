import { ArticleCard, BookCard, MainCardsGrid, MainShadow, ReportCard, TopCardGrid } from "@/common";

import { BlogCard } from "@/common/blogCard";
import { BlogSection } from "@/components/blogSection/blogSection.component";
import { Box } from "@mui/material";
import { MainBanner } from "@/common/mainBanner";
import { MainContainer } from "@/common";
import React from "react";
import { getArticlePage, getBlogPage, getEbookPage, getReportPage } from "@/apis";
import { Metadata } from "next";
 

type Props = {
  params: {
    locale: string;
  };
};
export const generateMetadata = ({ params }: Props): Metadata => {
  const locale = params.locale;
  const title = locale === 'ar' ? 'مقالات' : 'Blog';
  const description = locale === 'ar' ? 'تعرف على المزيد حول Cedge ورسالتنا وفريقنا.' : 'Learn more Blog Cedge';
  const canonicalUrl = `https://www.cedge.com.sa/${locale}/blog`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        ar: `https://www.cedge.com.sa/ar/blog`,
        en: `https://www.cedge.com.sa/en/blog`,
        'x-default':'https://www.cedge.com.sa/en/blog', // Default fallback
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
    },
    metadataBase: new URL('https://www.cedge.com.sa'),
  };
};
const BlogPage: React.FC<Props> = async ({ params }) => {
  const data = await getBlogPage(params.locale);
  const dataArticle = await getArticlePage(params.locale)
  const dataReport = await getReportPage(params.locale)
  const dataEbook = await getEbookPage(params.locale)
  return (
    <Box>
       
      <MainBanner
        backgroundImage={data.blogs_header.image}
        title={data.blogs_header.title}
        description={data.blogs_header.description}
        translation={false}
      />

      <MainContainer type="center">
        <Box
          sx={{
            marginTop: {
              xs: "-4rem",
              md: "-4rem",
              xl: "-4rem",
            },
          }}
        >
         {dataArticle.articles
        .filter(article => article.is_featured)
        .map(featuredArticle => (
          <BlogCard
            key={featuredArticle.id}
            id={featuredArticle.id}
            slug={featuredArticle.slug}
            title={featuredArticle.header_title}
            image={featuredArticle.image}
            description={featuredArticle.header_description || ""}
            date={featuredArticle.date_of_publish}
            isFeaturedAticle={featuredArticle.is_featured}
          />
        ))}

        </Box>
        {/* <AnimateLTR> */}
        <BlogSection isTopBlogSection={true} title={"articles"} link="./blog">
          <TopCardGrid>
            <MainShadow
              styles={{
                rotate: "355deg",
                display: {
                  xs: "none",
                  md: "block",
                },
                height: {
                  xs: "50px",
                  md: "200px",
                  lg: "300px",
                },
              }}
            />

            {dataArticle.articles.slice(0, 2).map((article) => (
              <ArticleCard
                key={article.id}
                title={article.header_title}
                image={article.image}
                id={article.id}
                slug={article.slug}
                isSmallCard={false}
                isFeaturedArticle={article.is_featured}
                isHasOnlyIcon={true}
                date={article.date_of_publish}
              />
            ))}
          </TopCardGrid>
        </BlogSection>
        {/* </AnimateLTR> */}
        {/* <AnimateLTR> */}
        <BlogSection title={"reports"} link="./blog/reports">
          <TopCardGrid>
            {dataReport.reports.slice(0, 2).map((report) => (
              <ReportCard
                key={report.id}
                image={report.image}
                title={report.title}
                id={report.id}
                slug={report.slug}
                isSmallCard={false}
                file={report.file}
                date={report.date_of_publish}
              />
            ))}
          </TopCardGrid>
        </BlogSection>
        {/* </AnimateLTR> */}
        {/* <AnimateLTR> */}
        <BlogSection title={"e-books"} link="./blog/e-books">
          <MainCardsGrid>
            {dataEbook.ebooks.slice(0, 4).map((ebook) => (
              <BookCard key={ebook.id} title={ebook.title} image={ebook.image} id={ebook.id} slug={ebook.slug}/>
            ))}
            {/* <BookCard id="1" title="BookCard" image={background}></BookCard>
              <BookCard id="2" title="BookCard" image={background}></BookCard>
              <BookCard id="3" title="BookCard" image={background}></BookCard>
              <BookCard id="4" title="BookCard" image={background}></BookCard> */}
          </MainCardsGrid>
        </BlogSection>
        {/* </AnimateLTR> */}
      </MainContainer>
    </Box>
  );
};
export default BlogPage;
