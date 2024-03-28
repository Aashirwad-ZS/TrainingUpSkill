// import { TestBed } from '@angular/core/testing';
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import { ActivatedRoute } from '@angular/router';
// import { MiscellaneousService } from './miscellaneous.service';

// describe('MiscellaneousService', () => {
//   let service: MiscellaneousService;
//   let httpTestingController: HttpTestingController;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//       providers: [MiscellaneousService]
//     });
//     service = TestBed.inject(MiscellaneousService);
//     httpTestingController = TestBed.inject(HttpTestingController);
//   });

//   afterEach(() => {
//     httpTestingController.verify();
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });

//   it('should call getRefreshToken', () => {
//     const mockResponse = { token: 'mockToken' };

//     service.getRefreshToken().subscribe(response => {
//       expect(response).toEqual(mockResponse);
//     });

//     const req = httpTestingController.expectOne('mock-url');
//     expect(req.request.method).toEqual('POST');
//     req.flush(mockResponse);
//   });

//   it('should call postFavourite', () => {
//     const courseId = 123;
//     const mockResponse = { success: true };

//     service.postFavourite(courseId).subscribe(response => {
//       expect(response).toEqual(mockResponse);
//     });

//     const req = httpTestingController.expectOne('mock-url');
//     expect(req.request.method).toEqual('POST');
//     req.flush(mockResponse);
//   });

//   it('should call deleteFavourite', () => {
//     const courseId = 123;
//     const mockResponse = { success: true };

//     service.deleteFavourite(courseId).subscribe(response => {
//       expect(response).toEqual(mockResponse);
//     });

//     const req = httpTestingController.expectOne('mock-url');
//     expect(req.request.method).toEqual('DELETE');
//     req.flush(mockResponse);
//   });

//   it('should call getRating', () => {
//     const courseId = 123;
//     const mockResponse = { data: 'mockRatingData' };

//     service.getRating(courseId);

//     const req = httpTestingController.expectOne('mock-rating-url');
//     expect(req.request.method).toEqual('GET');
//     req.flush(mockResponse);

//     service.courseRating$.subscribe(response => {
//       expect(response).toEqual(mockResponse.data);
//     });
//   });

//   it('should call getCourseReviews', () => {
//     const courseId = 123;
//     const mockResponse = { data: ['review1', 'review2'] };

//     service.getCourseReviews(courseId);

//     const req = httpTestingController.expectOne('mock-reviews-url');
//     expect(req.request.method).toEqual('GET');
//     req.flush(mockResponse);

//     service.courseReviews$.subscribe(response => {
//       expect(response).toEqual(mockResponse.data);
//     });
//   });

//   it('should call searchByTitle', () => {
//     const title = 'mockTitle';
//     const mockResponse = { data: 'mockSearchResults' };

//     service.searchByTitle(title).subscribe(response => {
//       expect(response).toEqual(mockResponse);
//     });

//     const req = httpTestingController.expectOne(`mock-search-url?title=${title}&role=student&field=all`);
//     expect(req.request.method).toEqual('GET');
//     req.flush(mockResponse);
//   });
// });
