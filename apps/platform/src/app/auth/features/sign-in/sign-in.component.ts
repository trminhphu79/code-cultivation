import { OAuthService } from '@tangkinhcode/services/oauth';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconFieldModule } from 'primeng/iconfield';
import { DividerModule } from 'primeng/divider';
import { TooltipModule } from 'primeng/tooltip';
import { InputIconModule } from 'primeng/inputicon';
import { rootSelector } from '../../../theme.config';
import { KeyLanguage, TranslatePipe } from '@tangkinhcode/shared/language';
import { Router } from '@angular/router';
import { TopBarComponent } from '../../../app-shell/top-bar/top-bar.component';
import { RippleModule } from 'primeng/ripple';
declare const google: any;

@Component({
  selector: 'pk-sign-in',
  imports: [
    CommonModule,
    InputIconModule,
    IconFieldModule,
    DividerModule,
    TooltipModule,
    TranslatePipe,
    TopBarComponent,
    RippleModule,
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent {
  keyLangs = KeyLanguage;

  private router: Router = inject(Router);

  protected isRegister = signal(false);
  protected actionHint = computed(() =>
    this.isRegister() ? KeyLanguage.signIn : KeyLanguage.signUp
  );
  protected actionBtnLabel = computed(() =>
    this.isRegister() ? KeyLanguage.signUp : KeyLanguage.signIn
  );
  protected questionHint = computed(() =>
    this.isRegister() ? KeyLanguage.youHadAccount : KeyLanguage.youNotHadAccount
  );

  protected signIn() {
    console.log('signIn...');
  }

  protected signUp() {
    console.log('signUp...');
  }

  protected changeMode() {
    const element = document.querySelector('html');
    element?.classList.toggle(rootSelector);
  }

  protected changeTab() {
    this.isRegister.set(!this.isRegister());
  }

  protected backHome() {
    this.router.navigateByUrl('/');
  }

  protected githubSignIn() {
    window.open(
      'https://github.com/login/oauth/authorize?scope=user:email&client_id=Ov23lis4b1cYWl1kueJv'
    );
  }

  protected googleSignIn() {
    this.createFakeGoogleWrapper();
  }

  handleCredentialResponse(response: any) {
    console.log('Encoded JWT ID token: ' + response.credential);
  }

  createFakeGoogleWrapper() {
    const googleLoginWrapper = document.createElement('div');

    googleLoginWrapper.style.display = 'none';
    googleLoginWrapper.classList.add('google-signin-button');

    document.body.appendChild(googleLoginWrapper);

    google.accounts.id.initialize({
      ux_mode: 'popup',
      client_id:
        '119323196099-8h3edgkcfdart0ncvmf23lq87bgtef8q.apps.googleusercontent.com',
      callback: (response: any) => this.handleCredentialResponse(response),
    });

    google.accounts.id.renderButton(googleLoginWrapper, {
      type: 'icon',
      width: '30',
    });

    google.accounts.id.prompt(); // also display the One Tap dialog
    const googleLoginWrapperButton =
      googleLoginWrapper.querySelector<HTMLDivElement>('div[role=button]');

    return googleLoginWrapperButton?.click();
  }
}
