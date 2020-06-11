import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
      path: 'question',
      loadChildren: () => import('./pages/question/question.module').then( m => m.QuestionPageModule)
    },
    {
      path: 'all-questions',
      loadChildren: () => import('./pages/all-questions/all-questions.module').then( m => m.AllQuestionsPageModule)
    },
    {
      path: 'create-question',
      loadChildren: () => import('./pages/create-question/create-question.module').then( m => m.CreateQuestionPageModule)
    },
    {
      path: 'active-exams',
      loadChildren: () => import('./pages/active-exams/active-exams.module').then( m => m.ActiveExamsPageModule)
    },
    {
      path: 'user-dashboard',
      loadChildren: () => import('./pages/user-dashboard/user-dashboard.module').then( m => m.UserDashboardPageModule)
    },
  {
    path: 'exam-history',
    loadChildren: () => import('./pages/exam-history/exam-history.module').then( m => m.ExamHistoryPageModule)
  }

  
  


 
 

 
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule] 
})
export class AppRoutingModule {}
