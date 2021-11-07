import { Grid, GridCellRenderer } from 'react-virtualized';

import { MovieCard } from "./MovieCard";

interface ContentProps {
  selectedGenre: {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  };

  movies: Array<{
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Array<{
      Source: string;
      Value: string;
    }>;
    Runtime: string;
  }>;
}

export function Content({ selectedGenre, movies }: ContentProps) {
  const cellRenderer: GridCellRenderer = ({ rowIndex, columnIndex, key, style }) => {
    return (
      <div key={key} style={style}>
        <MovieCard 
          key={movies[rowIndex].imdbID} 
          title={movies[rowIndex].Title} 
          poster={movies[rowIndex].Poster} 
          runtime={movies[rowIndex].Runtime} 
          rating={movies[rowIndex].Ratings[0].Value} />
      </div>
    );
  }

  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          <Grid
            cellRenderer={cellRenderer}
            columnCount={3}
            columnWidth={250}
            height={600}
            rowCount={movies.length}
            rowHeight={400}
            width={800}
            autoContainerWidth
            overscanRowCount={2}
          />
        </div>
      </main>
    </div>
  )
}