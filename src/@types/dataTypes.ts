export interface DataProps {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    original_language: string;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      string;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
}

export type CardsProps = {
    data: DataProps
}

export type DataItem = {
    adult:                 boolean;
    backdrop_path:         string;
    belongs_to_collection: Record<string, number | string>
    budget:                number;
    genres:                (Record<string, number | string>)[];
    homepage:              string;
    id:                    number;
    imdb_id:               string;
    original_language:     string;
    original_title:        string;
    overview:              string;
    popularity:            number;
    poster_path:           string;
    production_companies:  (Record<string, number | string>)[];
    production_countries:  (Record<string, string>)[];
    release_date:          number;
    revenue:               number;
    runtime:               number;
    spoken_languages:      (Record<string, string>)[];
    status:                string;
    tagline:               string;
    title:                 string;
    video:                 boolean;
    vote_average:          number;
    vote_count:            number;
}

export type ItemsProps = {
    data: DataItem
}