import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { fuseAnimations } from "@fuse/animations";
import { FuseConfigService } from "@fuse/services/config.service";

import { AuthenticationService } from "../services/auth.service";
import { MatSnackBar } from "@angular/material";
import { environment } from 'environments/environment';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from "angularx-social-login";

@Component({
    selector: "login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
})
export class LoginComponent implements OnInit {
    width: number = 100;
  height: number = 100;
  myStyle: Object = {
    'position': 'fixed',
    'width': '100%',
    'height': '100%',
    'z-index': -1,
    'top': 0,
    'left': 0,
    'right': 0,
    'bottom': 0,
  };
  myParams: object = {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#802d70"
      },
      "shape": {
        "type": "circle",
        "polygon": {
          "nb_sides": 7
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.6,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#802d70",
        "opacity": 0.4,
        "width": 1.5
      },
      "move": {
        "enable": true,
        "speed": 4,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  };

    user: SocialUser;
    loggedIn: boolean;

    loginForm: FormGroup;
    gitHubUrl : string = environment.GITHUB;
    
    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        public readonly authenticationService: AuthenticationService,
        private _router: Router,
        private snackBar: MatSnackBar,
        private activatedRoute: ActivatedRoute,
        private socialAuthService: SocialAuthService
    ) {
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true,
                },
                toolbar: {
                    hidden: true,
                },
                footer: {
                    hidden: false,
                },
                sidepanel: {
                    hidden: true,
                },
            },
        };

    
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.loginForm = this._formBuilder.group({
            email: ["", [Validators.required, Validators.email]],
            password: ["", Validators.required],
        });

        this.socialAuthService.authState.subscribe((user) => {
          if(user != null){
            
            // call backend
            this.authenticationService.logingoogle(user.email).subscribe(
              (data) => {
                console.log(data); 
                this.user = user;
                this.loggedIn = (user != null);
                localStorage.setItem('currentUser', JSON.stringify(data));
                this._router.navigate(['home']);
              },
              (error)=> {
                this.snackBar.open("User does not exist", null, {duration: 3000})
              }
            );          
          }
        });
    }

    /**
     * Login
     */
    login(): void {
        this.authenticationService.login(this.loginForm.value).subscribe(
            (data) => {
                console.log("Logged in!");
                localStorage.setItem('currentUser', JSON.stringify(data['user']));
                this._router.navigateByUrl("/home");
                
            },
            (error)=> console.log(error)
        )
    }

    signInWithGoogle(): void {
      this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
    }

    refreshToken(): void {
      this.socialAuthService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
    }
}
