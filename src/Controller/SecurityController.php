<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class SecurityController extends AbstractController
{
    /**
     * @Route("/login", name="app_login")
     */
    public function login(AuthenticationUtils $authenticationUtils, Request $request): Response
    {   
        //get url where user come from.
        $targetOrigin = $request->headers->get('referer');

        if ($targetOrigin){
        // activate redirect user on last url visited before login
        //  if ($this->getUser()) {
        //      return $this->redirectToRoute('target_path');
        //  }

        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();
        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();


        return $this->render('security/login.html.twig',[
            'last_username' => $lastUsername,
            'error' => $error,
            // add target redirect
            'redirect_user_after_login' => $targetOrigin,
            ]);
            
        } else {
 
            $error = $authenticationUtils->getLastAuthenticationError();
            $last_username = $authenticationUtils->getLastUsername();
            
            return $this->render('security/login.html.twig', [
                'last_username' => $last_username,
                'error' => $error,
            ]);

        }    
    }

    /**
     * @Route("/logout", name="app_logout")
     */
    public function logout(): void
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }
}
