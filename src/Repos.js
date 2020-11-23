import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { repos as reposAtom, view as viewAtom } from "./atoms";
import Repo from "./Repo";

export default () => {
  const [repos, setRepos] = useRecoilState(reposAtom);
  const view = useRecoilValue(viewAtom);

  useEffect(() => {
    const getRepos = async () => {
      const url = `https://corona.lmao.ninja/v2/countries/${view}?yesterday&strict&query%1`;
      const resp = await fetch(url);
      const body = await resp.json();
      setRepos(
        Object.assign({}, repos, {
          [view]: body,
        })
      );
    };

    getRepos();
  }, [view]);

  return (
    <div>HAHA</div>
  )
};
