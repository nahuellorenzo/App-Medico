import "./Loader.css"

export const Loader = () => {

    return (
        <div className="containerLoader">
            <div aria-label="Orange and tan hamster running in a metal wheel" role="img" class="wheel-and-hamster">
	<div class="wheel"></div>
	<div class="hamster">
		<div class="hamster__body">
			<div class="hamster__head">
				<div class="hamster__ear"></div>
				<div class="hamster__eye"></div>
				<div class="hamster__nose"></div>
			</div>
			<div class="hamster_limb hamster_limb--fr"></div>
			<div class="hamster_limb hamster_limb--fl"></div>
			<div class="hamster_limb hamster_limb--br"></div>
			<div class="hamster_limb hamster_limb--bl"></div>
			<div class="hamster__tail"></div>
		</div>
	</div>
	<div class="spoke"></div>
</div>

        </div>
    )

}