import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Prefix } from 'src/app/constants/enums/prefix';
import { RouterLinks } from 'src/app/constants/enums/routerLinks';
import { Title } from 'src/app/constants/enums/title';
import { APIResponse } from 'src/app/models/ApiResponse';
import { Batch } from 'src/app/models/Batch';
import { Course } from 'src/app/models/Course';
import { Error } from 'src/app/models/Error';
import { Path } from 'src/app/models/Path';
import { SearchResponse } from 'src/app/models/SearchResponse';
import { MiscellaneousService } from 'src/app/services/miscellaneous.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.sass'],
})
export class SearchPageComponent implements OnInit {
  prefix: string = '';
  heading: string = '';
  allPathsData: Path[] = [];
  allCoursesData: Course[] = [];
  loading: boolean = true;
  error: boolean = false;
  errorCard: Error = {
    message: '',
    code: 0,
  };
  onGoingFlag: boolean = false;
  //enums
  Title = Title;
  RouterLinks = RouterLinks;
  Prefix = Prefix;
  noContent: boolean = false;
  height: number = 112;
  searchResponse: any;
  activatedRoute: any;

  constructor(
    private searchService: MiscellaneousService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const searchQuery = this.route.snapshot.queryParamMap.get('q');
    if (searchQuery != null) {
      this.searchService
        .searchByTitle(searchQuery)
        .subscribe((data: APIResponse<SearchResponse>) => {
          this.searchResponse = data.data;
          this.allPathsData = this.searchResponse.paths;
          this.allCoursesData = this.searchResponse.courses;

          this.loading = false;
          if (
            this.allPathsData.length == 0 &&
            this.allCoursesData.length == 0
          ) {
            this.noContent = true;
          }
          // console.log(this.searchResponse);
          // console.log('pathdata: ', this.allPathsData);
          // console.log('coursedata; ', this.allCoursesData);
        });
    }
  }
}
