import React from "react";
import { useEffect } from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";

import { getSortedPostsData } from "@library/posts";
import { getSortedProjectsData } from "@library/projects";
import { getSortedTeamData } from "@library/team";

import { circleText } from "@common/utilits";


const HeroSection = dynamic( () => import("@components/sections/Hero"), { ssr: false } );

const Home1 = (props) => {
  useEffect(() => {
    circleText();
  }, []);

  return (
    <Layouts>
      <>
        <HeroSection />

      </>
    </Layouts>
  );
};
export default Home1;

export async function getStaticProps() {
  const allPosts = getSortedPostsData();
  const allProjects = getSortedProjectsData();
  const allTeam = getSortedTeamData();

  return {
    props: {
      posts: allPosts,
      projects: allProjects,
      team: allTeam
    }
  }
}