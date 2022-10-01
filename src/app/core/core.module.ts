import { NgModule, Optional, SkipSelf } from "@angular/core";
import { HTTP_INTERCEPTORS, HttpBackend, HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations: [],
    // import: [],
})
export class CoreModule{
    constructor(
        @Optional()
        @SkipSelf()
        parentModue: CoreModule
    ){
        if(parentModue){
            throw new Error('CoreModule is already loaded. Import it in the AppModule only.');
        }
    }
}