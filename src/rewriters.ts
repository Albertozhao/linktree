import links from "./links"

class AvatarRewriter {
    element(element) {
        element.setAttribute("src", "https://raw.githubusercontent.com/Albertozhao/linktree/main/images/jae-phan-resized.png")
    }
}

class BodyRewriter {
    element(element) {
        element.setAttribute(
            "style",
            "background-image: url(https://svg-clipart.com/svg/red/fflcIL9-wallpaper-of-yellow-orange-pink-red-mixed-combination-background-vector.svg); background-position: center; background-size: cover;",
        )
    }
}

class HeadRewriter {
    element(element) {
        element.append(
            // eslint-disable-next-line quotes
            '<link rel="icon" type="image/png" href="https://raw.githubusercontent.com/Albertozhao/linktree/main/images/jae-phan-resized.png">',
            {
                html: true,
            },
        )
    }
}

class LinkRewriter {
    element(element) {
        links.forEach(link =>
            element.append(
                `<a href="${link.url}" target="_blank">${link.name}</a>`,
                {
                    html: true,
                },
            ),
        )
    }
}

class NameRewriter {
    element(element) {
        element.setInnerContent("Jae Phan")
    }
}

class ProfileRewriter {
    element(element) {
        element.removeAttribute("style")
    }
}

class SocialRewriter {
    element(element) {
        element.setAttribute("style", "fill: white")

        links.forEach(link => {
            element.append(
                // eslint-disable-next-line quotes
                `<a href="${link.url}" target="_blank">${link.svg}</a>`,
                {
                    html: true,
                },
            )
        })
    }
}

class TitleRewriter {
    element(element) {
        element.setInnerContent("Jae Phan")
    }
}

export {
    AvatarRewriter,
    BodyRewriter,
    HeadRewriter,
    LinkRewriter,
    NameRewriter,
    ProfileRewriter,
    SocialRewriter,
    TitleRewriter,
}
