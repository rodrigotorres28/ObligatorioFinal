import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { selectGroupStandings } from '../state/selectors';
import { addQuarterFinalTeam } from '../state/BracketSlice';
import { useEffect } from 'react';

const updateBracketWithStandings = () => {
  const dispatch = useDispatch();
  const groups = useSelector((state: RootState) => state.groups);

  Object.keys(groups).forEach(groupName => {
    const group = groups[groupName];
    const allMatchesPlayed = Object.values(group.matches).every(
      match => match.team1Goals !== -1 && match.team2Goals !== -1
    );

    if (allMatchesPlayed) {
      const sortedStandings = selectGroupStandings(groupName);
      const firstPlaceTeam = sortedStandings[0];
      const secondPlaceTeam = sortedStandings[1];

      if (groupName === 'groupA') {
        dispatch(addQuarterFinalTeam({ matchName: 'match1', team: firstPlaceTeam, isTopTeam: true }));
        dispatch(addQuarterFinalTeam({ matchName: 'match2', team: secondPlaceTeam, isTopTeam: false }));
      } else if (groupName === 'groupB') {
        dispatch(addQuarterFinalTeam({ matchName: 'match1', team: secondPlaceTeam, isTopTeam: false }));
        dispatch(addQuarterFinalTeam({ matchName: 'match2', team: firstPlaceTeam, isTopTeam: true }));
      } else if (groupName === 'groupC') {
        dispatch(addQuarterFinalTeam({ matchName: 'match3', team: firstPlaceTeam, isTopTeam: true }));
        dispatch(addQuarterFinalTeam({ matchName: 'match4', team: secondPlaceTeam, isTopTeam: false }));
      } else if (groupName === 'groupD') {
        dispatch(addQuarterFinalTeam({ matchName: 'match3', team: secondPlaceTeam, isTopTeam: false }));
        dispatch(addQuarterFinalTeam({ matchName: 'match4', team: firstPlaceTeam, isTopTeam: true }));
      }
    }
  });
};
